# frozen_string_literal: true

class InertiaExampleController < InertiaController
  def index
    render inertia: "InertiaExample", props: {
      name: params.fetch(:name, "World")
    }
  end
end
