class API::PostsController < API::BaseController
  def index
    render json: Post.all
  end
end
