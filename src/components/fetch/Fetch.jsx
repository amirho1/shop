import React from 'react'
import Spiner from "../spiner/Spiner";
import useFetch from "../../hooks/useFetch";

export default function Fetch({
  url,
  renderSuccess,
  renderFallBack = <Spiner />,
  renderError = error => <p>{JSON.stringyfy(error, null, 2)}</p>,
}) {
  const { data, error, loading } = useFetch(url);

  if (loading) return renderFallBack;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}