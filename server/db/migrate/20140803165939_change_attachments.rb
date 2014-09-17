class ChangeAttachments < ActiveRecord::Migration
  def change
    change_table :attachments do |t|
      t.rename :attachment, :entity
    end
  end
end
