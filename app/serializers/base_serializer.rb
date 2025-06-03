class BaseSerializer < Oj::Serializer
  include ActionView::Helpers::NumberHelper

  def expand_raw
    options.dig(:expand) || []
  end

  def expand
    expand_raw.map do |key|
      key.split(".").first
    end
  end

  def expand_children(parent_key)
    parent_entry = expand_raw.find { |e| e.include?(parent_key) }
    return [] if !parent_entry

    [ parent_entry.split(".").filter { |e| e != parent_key }.join(".") ]
  end
end
