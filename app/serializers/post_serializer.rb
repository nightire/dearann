class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content,
    :category_id, :category_url_name,
    :created_at, :updated_at

  def category_url_name
    object.category.url_name
  end
end
