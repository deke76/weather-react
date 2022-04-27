defmodule CarWeb.RentalsController do
  use CarWeb, :controller

  alias Car.{Repo, Rental}

  def index(conn, _params) do
    text(conn, "GET api/v1/rentals - now we're cooking!\n")
  end

  def create(conn, params) do
    start_date = Date.from_iso8601!(params["start_date"])
    end_date = Date.from_iso8601!(params["end_date"])
    if Date.compare(start_date, end_date) == :gt do
      conn
      |> put_status(422)
      |> json(%{error: "Start date must not be greater than end date"})
    else
      changeset = Rental.changeset(%Rental{}, params)
      if (changeset.valid?) do
        return_value = elem(Repo.insert(changeset, returning: true), 1)
        conn
        |> put_status(200)
        |> json(%{id: return_value.id, name: return_value.name, model: return_value.model, start_date: return_value.start_date, end_date: return_value.end_date
          })
      else
        conn
        |> put_status(422)
        |> json(%{error: "Name and model must not be blank"})
      end
    end
  end
end
