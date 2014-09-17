class AttachmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :path, :size, :type

  def name
    object.entity.identifier
  end

  def path
    object.entity.url
  end

  def size
    object.entity.size
  end

  def type
    object.entity.content_type
  end
end
