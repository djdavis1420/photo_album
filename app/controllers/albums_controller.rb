# frozen_string_literal: true

class AlbumsController < ApplicationController
  def show; end

  def sync
    response = Albums::Sync.call(params[:id])

    render json: { photos: response }
  end
end
