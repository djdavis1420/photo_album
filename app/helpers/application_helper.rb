# frozen_string_literal: true

module ApplicationHelper
  def react_component(name, props = {})
    tag.send(name, 'props-json' => props.to_json)
  end
end
