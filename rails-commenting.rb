# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Here, a controller method has been created in the command line. The line below shows us that the class, BlogPostsController inherits from ApplicationController. 
class BlogPostsController < ApplicationController
  def index
    # ---2) The below is a read method that will call the index and show us all the entries in our database. 
    @posts = BlogPost.all
  end

  # ---3) Here we have a method named, show. It takes params [:id] and will show us the specific information we're asking for according to the id param that we input in the url / postman.  
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Next we have the restful route, new. It is also a a read action and would need the 'get' HTTP verb in postman. It would give us a new form to fill out that would eventually add information to our db. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The code below allows a user to add content. The data coming in will require strong params as it will be inputted by users. Strong params protect our applications and databased from SQL injections. Create uses the post HTTP verb and constitutes a create CRUD method. Is uses the strong params, blog_post_params, as definied in our private method at the end of the page. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The below code is used within our edit method. It uses the HTTP verb, 'get' and will show us the edit form for the BlogPost item with the corresponding params. It uses 'get' and not 'patch' because it's not doing the actual editing, it's just getting us the form. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The following code constitutes part of our update method. Update uses the HTTP verb 'patch' as it updates the item with the corresponding id. Line 44 takes blog_post_params as, again, this is where users will input information and it will protect us from SQL attacks that seek to infiltrate our databases. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The following code will redirect our uses after they've delete an entry. It will take them right back to the index. This is useful as it helps them to know that the intended outcome was achieved.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The following keyword, private, tells Ruby that whatever follows is supposed to be................ private. They can only be called from within the object which, from a cyber security standpoint, makes a lot of sense. Strong params are typically the last methods in the controller as they protect everything above them. Strgon params have 2 methods, require and permit. Require requires the attributes passed to be in the update and create methods. Permit allows certain items to be there or not. 
  private
  def blog_post_params
    # ---10) Finally, the params.require line below restricts what values are asked for from the user. Only the attributes listed in the strong params method will be allowed.
    params.require(:blog_post).permit(:title, :content)
  end
end
