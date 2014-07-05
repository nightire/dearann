class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :category_id, :created_at, :updated_at
end
