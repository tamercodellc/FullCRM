import * as React from "react"
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Eye, Pencil, Trash2, Phone, MapPin, Mail, User, Plus, MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { EditCompanyDialog } from "./edit-company-dialog"

const data = [
  {
    id: "comp-001",
    name: "Acme Corp",
    location: "New York, USA",
    phone: "+1 (555) 123-4567",
    status: "active",
    email: "contact@acme.com",
    owner: "John Smith",
    social: {
      facebook: "https://facebook.com/acme",
      instagram: "https://instagram.com/acme",
      whatsapp: "+1234567890",
      tiktok: "https://tiktok.com/@acme"
    },
  },
  {
    id: "comp-002",
    name: "TechStart Inc",
    location: "San Francisco, USA",
    phone: "+1 (555) 234-5678",
    status: "inactive",
    email: "info@techstart.com",
    owner: "Mike Wilson",
    social: {
      facebook: "https://facebook.com/techstart",
      instagram: "https://instagram.com/techstart",
      whatsapp: "+1234567891",
      tiktok: "https://tiktok.com/@techstart"
    },
  },
  {
    id: "comp-003",
    name: "Global Solutions",
    location: "London, UK",
    phone: "+44 20 7123 4567",
    status: "onboarding",
    email: "hello@globalsolutions.com",
    owner: "Emma Davis",
    social: {
      facebook: "https://facebook.com/globalsolutions",
      instagram: "https://instagram.com/globalsolutions",
      whatsapp: "+1234567892",
      tiktok: "https://tiktok.com/@globalsolutions"
    },
  },
  {
    id: "comp-004",
    name: "Digital Dynamics",
    location: "Toronto, Canada",
    phone: "+1 (555) 345-6789",
    status: "active",
    email: "support@digitaldynamics.com",
    owner: "Robert Taylor",
    social: {
      facebook: "https://facebook.com/digitaldynamics",
      instagram: "https://instagram.com/digitaldynamics",
      whatsapp: "+1234567893",
      tiktok: "https://tiktok.com/@digitaldynamics"
    },
  },
  {
    id: "comp-005",
    name: "Future Systems",
    location: "Berlin, Germany",
    phone: "+49 30 1234 5678",
    status: "inactive",
    email: "info@futuresystems.com",
    owner: "Anna Schmidt",
    social: {
      facebook: "https://facebook.com/futuresystems",
      instagram: "https://instagram.com/futuresystems",
      whatsapp: "+1234567894",
      tiktok: "https://tiktok.com/@futuresystems"
    },
  },
]

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          size="sm"
          className="-ml-3"
        >
          Company Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-medium pl-2">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      const statusMap = {
        active: { label: "Active", variant: "success" },
        inactive: { label: "Inactive", variant: "destructive" },
        onboarding: { label: "Onboarding", variant: "regular" },
      }

      const { label, variant } = statusMap[status] || { 
        label: status, 
        variant: "default" 
      }

      return <Badge variant={variant}>{label}</Badge>
    },
  },
  {
    accessorKey: "owner",
    header: () => (
      <div className="flex items-center">
        <User className="mr-2 h-4 w-4" />
        Owner
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: () => (
      <div className="flex items-center">
        <Phone className="mr-2 h-4 w-4" />
        Phone
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="flex items-center">
        <Mail className="mr-2 h-4 w-4" />
        Email
      </div>
    ),
  },
  {
    accessorKey: "social",
    header: "Social Media",
    cell: ({ row }) => {
      const social = row.getValue("social")
      return (
        <div className="flex items-center gap-2">
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/80"
          >
            <Icon icon="facebook" size="sm" />
          </a>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/80"
          >
            <Icon icon="instagram" size="sm" />
          </a>
          <a
            href={`https://wa.me/${social.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/80"
          >
            <Icon icon="whatsapp" size="sm" />
          </a>
          <a
            href={social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/80"
          >
            <Icon icon="tiktok" size="sm" />
          </a>
        </div>
      )
    },
  },
  {
    accessorKey: "location",
    header: () => (
      <div className="flex items-center">
        <MapPin className="mr-2 h-4 w-4" />
        Location
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [showEditDialog, setShowEditDialog] = React.useState(false)

      return (
        <>
          <div className="flex items-center gap-2">
            <Button variant="action-view" size="icon" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
            <Button 
              variant="action-edit" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setShowEditDialog(true)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="action-delete" size="icon" className="h-8 w-8">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <EditCompanyDialog 
            open={showEditDialog} 
            onOpenChange={setShowEditDialog} 
          />
        </>
      )
    },
  },
]

export function CompanyTable() {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter companies..."
          value={(table.getColumn("name")?.getFilterValue() ?? "")}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
         className="max-w-sm h-9"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
           <Button variant="outline" size="sm" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
       <Button variant="impartial" size="sm" className="ml-4">
          <Icon icon={Plus} />
          Add Company
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-2 h-9 w-9 p-0" 
              disabled={table.getFilteredSelectedRowModel().rows.length === 0}
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} selected
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                const selectedEmails = table
                  .getFilteredSelectedRowModel()
                  .rows.map(row => row.original.email)
                window.location.href = `mailto:${selectedEmails.join(',')}`
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-muted/50 data-[state=selected]:bg-muted"
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-sm text-muted-foreground"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  table.previousPage()
                }}
                aria-disabled={!table.getCanPreviousPage()}
                className={!table.getCanPreviousPage() ? "pointer-events-none opacity-50" : "hover:bg-accent"}
              />
            </PaginationItem>
            {table.getPageCount() > 0 && (
              <>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="bg-accent/50">
                    {table.getState().pagination.pageIndex + 1}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    {table.getPageCount()}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  table.nextPage()
                }}
                aria-disabled={!table.getCanNextPage()}
                className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : "hover:bg-accent"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}