#!/usr/bin/env ruby

require_relative 'sync'

module Albums
  module Main
    def self.run
      id = get_id.chomp

      if valid?(id)
        confirm = confirm(id)

        if confirmed?(confirm)
          get_photos(id)
        else
          bail(:declined)
        end

        return
      else
        bail(:invalid)
      end
    end

    def self.get_id
      puts 'Please Enter an Album ID'
      gets
    end

    def self.valid?(id)
      Integer(id).positive?
    rescue ArgumentError => _
      return false
    end

    def self.confirm(id)
      puts "You entered #{id}. Continue? [Y/N]"
      gets
    end

    def self.confirmed?(confirm)
      confirm.chomp == 'Y'
    end

    def self.get_photos(id)
      results = Albums::Sync.call(id)

      results.each do |photo|
        puts "Photo ID: #{photo['id']}"
        puts "Title: #{photo['title']}"
      end
    end

    def self.bail(reason)
      case reason
      when :invalid then puts 'Invalid Input'
      when :declined then puts 'Goodbye!'
      end
    end
  end
end
