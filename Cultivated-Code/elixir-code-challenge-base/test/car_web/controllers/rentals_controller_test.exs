defmodule CarWeb.RentalsControllerTest do
  use CarWeb.ConnCase

  test "GET /api/v1/rentals", %{conn: conn} do
    conn = get(conn, "/api/v1/rentals")
    assert text_response(conn, 200) == "GET api/v1/rentals - now we're cooking!\n"
  end

  test "POST /api/v1/rentals & blank name", %{conn: conn} do
    url = "/api/v1/rentals?name=&model=Honda&start_date=2019-11-01&end_date=2019-11-05"
    conn = post(conn, url)
    assert json_response(conn, 422) == %{"error" => "Name and model must not be blank"}
  end

  test "POST /api/v1/rentals & blank model", %{conn: conn} do
    url = "/api/v1/rentals?name=Civic&model=&start_date=2019-11-01&end_date=2019-11-05"
    conn = post(conn, url)
    assert json_response(conn, 422) == %{"error" => "Name and model must not be blank"}
  end

  test "POST /api/v1/rentals & end older than start", %{conn: conn} do
    url = "/api/v1/rentals?nameCivic=&model=Honda&start_date=2019-11-01&end_date=2019-10-05"
    conn = post(conn, url)
    assert json_response(conn, 422) == %{"error" => "Start date must not be greater than end date"}
  end

  test "POST /api/v1/rentals & full data", %{conn: conn} do
    url = "/api/v1/rentals?name=Civic&model=Honda&start_date=2019-11-01&end_date=2019-11-05"
    conn = post(conn, url)
    assert json_response(conn, 200) == %{"end_date" => "2019-11-05", "id" => 8, "model" => "Honda", "name" => "Civic", "start_date" => "2019-11-01"}
  end
end
