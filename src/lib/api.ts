import { Filter, Sort } from "@/types";
import { notFound } from "@tanstack/react-router";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

type Invoice = {
  id: number;
  invoiceDate: string;
  status: string;
  total: number;
  customer: {
    name: string;
    id: number;
  };
  items: {
    id: number;
    name: string;
    price: number;
  }[];
};

type InvoiceItem = Pick<Invoice, "id" | "customer" | "status" | "total" | "invoiceDate">;

type AllInvoicesResponse = {
    totalAmount: number;
    totalInvoices: number;
    invoices: InvoiceItem[];
}

type DashboardStats = {
    totalAmount: number;
    totalCustomers: number;
    totalPaid: number;
    totalOverdue: number;
};

type SearchFilters = {
    search?: string;
    filters?: Array<Filter>;
    sort?: Sort;
}

export const fetchInvoices = async (searchFilters?: SearchFilters) => {
  const params = new URLSearchParams();

  if (searchFilters?.search) {
    params.append("search", searchFilters.search);
  }

  if (searchFilters?.filters) {
    // Add array of string filters to query param
    searchFilters.filters.forEach((filter) => {
      params.append("filters", filter);
    });
  }

  if (searchFilters?.sort) {
    params.append("sort", searchFilters.sort);
  }

  return axiosInstance
    .get<AllInvoicesResponse>("/invoices/all", { params })
    .then(({ data }) => data);
};

export const fetchInvoice = async (id: string, abortController?: AbortController) => {
  const invoiceId = parseInt(id);
  if (isNaN(invoiceId)) {
    throw notFound();
  }
  try {
    const invoice = await axiosInstance
      .get<Invoice>(`/invoice/${id}`, {
        signal: abortController?.signal,
      })
      .then(({ data }) => data);
    return invoice;
  } catch (error) {
    throw notFound();
  }
};


export const fetchDashboardStats = async (abortController?: AbortController) => {
  return axiosInstance.get<DashboardStats>("/dashboard", { signal: abortController?.signal }).then(({ data }) => data);
}
