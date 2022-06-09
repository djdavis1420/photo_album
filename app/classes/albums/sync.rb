# frozen_string_literal: true

require 'json'
require 'net/http'
require 'active_support/core_ext/object/try'

module Albums
  module Sync
    BASE_URL = 'jsonplaceholder.typicode.com'

    def self.call(album_id)
      raise ArgumentError, 'Invalid Album ID' unless valid_id?(album_id)

      path = "/photos?albumId=#{album_id}"
      response = Net::HTTP.get_response(BASE_URL, path)
      JSON.parse(response.body)
    end

    def self.valid_id?(album_id)
      Integer(album_id).positive?
    rescue ArgumentError => _
      return false
    end
  end
end
