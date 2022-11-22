class AddAuthorToPages < ActiveRecord::Migration[7.0]
  def change
    add_column :pages, :author, :string
  end
end
