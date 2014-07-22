class API::PostsController < API::BaseController
  def index
    render json: Post.includes(:category), status: 200
  end

  def create
    post = Post.new(post_params)

    if post.save
      render json: post, status: 201, location: api_post_url(post)
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :content, :category_id)
  end
end
