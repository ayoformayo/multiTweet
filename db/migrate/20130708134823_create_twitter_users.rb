class CreateTwitterUsers < ActiveRecord::Migration
  def change
    create_table :twitter_users do |t|
      t.string :uid
      t.string :screen_name
      t.string :name
    end
  end
end
