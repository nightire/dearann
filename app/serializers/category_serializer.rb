class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :url_name
  has_many :posts, embed: :ids
end
