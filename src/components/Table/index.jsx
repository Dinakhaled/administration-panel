import React from "react";
import PropTypes from "prop-types";
import {
  Table as MTable,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Tooltip
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { StyledTableCellHead } from "./style";

const Table = ({ headlines, rows }) => {
  return (
    <TableContainer component={Paper}>
      <MTable>
        <TableHead>
          <TableRow>
            {headlines.map((head, index) => (
              <StyledTableCellHead align="left" key={index}>
                <Stack direction={"row"}>
                  {head.label}
                  {head.isSortable && (
                    <Tooltip title="sort">
                      <ArrowDownwardIcon
                        onClick={head.handleSort}
                        sx={{ mx: 1 }}
                      />
                    </Tooltip>
                  )}
                </Stack>
              </StyledTableCellHead>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </MTable>
    </TableContainer>
  );
};

Table.propTypes = {
  headlines: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.node,
  actionsKeys: PropTypes.arrayOf(PropTypes.string)
};

Table.defaultProps = {
  headlines: [],
  actionsKeys: []
};

export default Table;
