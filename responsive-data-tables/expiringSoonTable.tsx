"use client";

import * as React from "react";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import TuneIcon from "@mui/icons-material/Tune";
import DeleteIcon from "@mui/icons-material/Delete";
import InputIcon from "@mui/icons-material/Input";
import { useTheme, styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* ---------------- COLUMNS ---------------- */

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "left" | "center" | "right";
}

const columns: readonly Column[] = [
  { id: "Organization", label: "Organization", minWidth: 220 },
  { id: "seatsUsed", label: "Seats Used", minWidth: 120 },
  { id: "expiryDate", label: "Expiry Date", minWidth: 140 },
  { id: "billingStatus", label: "Billing Status", minWidth: 140 },
  { id: "action", label: "Action", align: "center", minWidth: 80 },
];

/* ---------------- DATA ---------------- */

import expiringRows from "../../data/hardcoded/expiringSoonData";

type Data = typeof expiringRows[number];
const rows: Data[] = expiringRows;

/* ---------------- ACTION MENU ---------------- */

const ActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{ display: "flex" }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>
          <VisibilityIcon fontSize="small" sx={{ mr: 1 }} /> View
        </MenuItem>
        <MenuItem>
          <EditIcon fontSize="small" sx={{ mr: 1 }} /> Edit
        </MenuItem>
        <MenuItem>
          <TuneIcon fontSize="small" sx={{ mr: 1 }} /> Adjust
        </MenuItem>
        <MenuItem>
          <InputIcon fontSize="small" sx={{ mr: 1 }} /> Book / Transfer
        </MenuItem>
        <MenuItem>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>
    </>
  );
};

/* ---------------- MAIN TABLE ---------------- */

const ExpiringSoonTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper sx={{ borderRadius: "12px", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 420 }}>
        <Table stickyHeader sx={{ padding: "15px", tableLayout: "fixed", width: "100%" }}>
          {/* ---------- STICKY TITLE ---------- */}
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={columns.length}
                sx={{
                  position: "sticky",
                  top: 0,
                  zIndex: 3,
                  backgroundColor: "#fff",
                }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Box sx={{ fontSize: 24, fontWeight: 500, color: "#202939" }}>
                    Expiring Soon
                  </Box>
                  <Button
                    sx={{
                      border: "1px solid #CDD5DF",
                      textTransform: "none",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#364152",
                    }}
                  >
                    View All Expiring
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>

          {/* ---------- COLUMN HEADERS ---------- */}

          <Table sx={{ border: "1px solid #E6E6E9", marginTop: "10px" }}>
            <TableRow>
                {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    backgroundColor: "#F8FAFC",
                    color: "#697586",
                    fontWeight: 500,
                    position: "sticky",
                    top: 56,
                    zIndex: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>

            {/* ---------- BODY ---------- */}
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow hover key={i}>
                    <TableCell sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.Organization}</TableCell>
                    <TableCell sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.seatsUsed}</TableCell>
                    <TableCell sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.expiryDate}</TableCell>

                    {/* Billing Status Badge */}
                    <TableCell>
                      <Box
                        sx={{
                          textAlign: "center",
                          display: "inline-block",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "999px",
                          fontSize: "14px",
                          fontWeight: 500,
                          backgroundColor:
                            row.billingStatus === "Paid"
                              ? "#ECFDF3"
                              : row.billingStatus === "Pending"
                              ? "#FFF7ED"
                              : "#FEF2F2",
                          color:
                            row.billingStatus === "Paid"
                              ? "#087442"
                              : row.billingStatus === "Pending"
                              ? "#BA3A14"
                              : "#B6271F",
                        }}
                      >
                        {row.billingStatus}
                      </Box>
                    </TableCell>

                    <TableCell align="center">
                      <ActionMenu />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Table>
      </TableContainer>

      {/* ---------- PAGINATION ---------- */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isSmallScreen ? "center" : "space-between",
          px: 2,
          py: 1.5,
          borderTop: "1px solid #E5E7EB",
        }}
      >
        {!isSmallScreen && (
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            style={{
              color: "#364152",
              fontWeight: "600",
              border: "1px solid #CDD5DF",
              borderRadius: "8px",
              padding: "6px 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ArrowBackIcon sx={{ width: "20px" }} />
            Previous
          </button>
        )}

        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          sx={{
            "& .MuiTablePagination-actions": {
              display: isSmallScreen ? "flex" : "none", // arrows hidden on big screen
            },
            color: "#697586",
          }}
        />

        {!isSmallScreen && (
          <button
            disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
            onClick={() => setPage(page + 1)}
            style={{
              color: "#364152",
              fontWeight: "600",
              border: "1px solid #CDD5DF",
              borderRadius: "8px",
              padding: "6px 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ArrowForwardIcon sx={{ width: "20px" }} />
            Next
          </button>
        )}
      </Box>
    </Paper>
  );
};

export default ExpiringSoonTable;
