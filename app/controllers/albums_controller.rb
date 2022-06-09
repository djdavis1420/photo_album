# frozen_string_literal: true

class AlbumsController < ApplicationController
  def show; end

  def sync
    response = Albums::Sync.call(params[:id])

    render json: { photos: response }, status: 200
  rescue StandardError => e
    render json: { error: e.to_s.capitalize }, status: 400
  end
end
