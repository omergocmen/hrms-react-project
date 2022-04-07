import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "semantic-ui-react";
import { changePage } from "../store/actions/paginationActions";
import { useEffect } from "react";

export default function PaginationCompact() {
  const state = useSelector((state) => state.pagination);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(changePage(1))
  }, []);
  

  const change = (data) => {
    dispatch(changePage(data.activePage));
  };

  return (
    <div>
      <Pagination style={{margin:"2rem"}}
        boundaryRange={0}
        firstItem={1}
        lastItem={state.totalPage ? state.totalPage : 10}
        siblingRange={1}
        totalPages={state.totalPage ? state.totalPage : 10}
        onPageChange={(evevt, data) => change(data)}
        activePage={state.selectedPage}
      />
    </div>
  );
}
