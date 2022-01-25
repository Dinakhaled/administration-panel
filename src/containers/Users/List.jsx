import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  TableCell,
  TableRow,
  Button,
  Stack,
  Typography
} from "@mui/material";

import { getUsersAction } from "store/users/actions";
import { ROUTE_PATHS } from "utils/pathNames";

import Table from "components/Table";
import EmptyState from "components/EmptyState";
import DeleteUser from "./Delete";

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.users);

  const [deletedUserId, setDeletedUserId] = useState(false);

  useEffect(() => {
    list.length === 0 && dispatch(getUsersAction());
  }, []);

  const tableKeys = {
    id: "ID",
    name: "Name",
    username: "Username",
    city: "City",
    email: "Email",
    edit: "Edit",
    delete: "Delete"
  };

  const renderRowData = (key, row) => {
    switch (key) {
      case "city":
        return row["address"] ? row["address"][key] : "";
      case "edit":
        return (
          <Button
            variant="contained"
            color="warning"
            onClick={() =>
              navigate(`${ROUTE_PATHS.editUser}/${row.id}`)
            }
          >
            Edit
          </Button>
        );
      case "delete":
        return (
          <Button
            variant="contained"
            color="error"
            onClick={() => setDeletedUserId(row.id)}
          >
            Delete
          </Button>
        );
      default:
        return row[key] ?? "";
    }
  };

  return (
    <>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
        sx={{ my: 3 }}
      >
        <Typography variant="h4" component="h4">
          Users list
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate(ROUTE_PATHS.addUser)}
        >
          Add new
        </Button>
      </Stack>
      {list.length > 0 ? (
        <Table
          headlines={Object.values(tableKeys)}
          actionsKeys={["Edit", "Delete"]}
          rows={list.map((row) => (
            <TableRow className="table__row" key={row.id}>
              {Object.keys(tableKeys).map((key, i) => (
                <TableCell
                  key={i}
                  className="table__cell"
                  align="left"
                >
                  {renderRowData(key, row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        />
      ) : (
        <EmptyState />
      )}
      <DeleteUser id={deletedUserId} />
    </>
  );
};

export default UsersList;
