# frozen_string_literal: true

require 'net/http'

module Albums
  module Sync
    BASE_URL = 'jsonplaceholder.typicode.com'

    def self.call(album_id)
      path = "/photos?albumId=#{album_id}"

      response = Net::HTTP.get_response(BASE_URL, path)

      JSON.parse(response.body)
    end
  end
end
