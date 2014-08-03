class API::AttachmentsController < API::BaseController
  def create
    attachment = Attachment.new
    attachment.entity = params[:attachment]

    if attachment.save!
      render json: attachment, status: :created
    else
      render json: attachment.errors, status: :unprocessable_entity
    end
  end
end
