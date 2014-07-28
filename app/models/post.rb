class Post < ActiveRecord::Base
  belongs_to :category

  validates :category_id, presence: true, on: [:create, :update]
  validates :title,       presence: true, on: [:create, :update]
  validates :content,     presence: true, on: [:create, :update]
end
