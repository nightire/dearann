class Attachment < ActiveRecord::Base
  mount_uploader :entity, AttachmentUploader
end
