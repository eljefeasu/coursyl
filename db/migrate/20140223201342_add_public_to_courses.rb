class AddPublicToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :public, :boolean
  end
end
