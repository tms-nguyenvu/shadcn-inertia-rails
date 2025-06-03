class ProjectSerializer < BaseSerializer
  attribute :type do "Project" end

  attributes(
    :created_at,
    :title,
    :updated_at,
    :id
  )
end
