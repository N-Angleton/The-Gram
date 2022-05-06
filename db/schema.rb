# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_06_005550) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.string "body", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "users_id"
    t.bigint "posts_id"
    t.index ["posts_id", "users_id"], name: "index_comments_on_posts_id_and_users_id"
    t.index ["posts_id"], name: "index_comments_on_posts_id"
    t.index ["users_id"], name: "index_comments_on_users_id"
  end

  create_table "follow_requests", force: :cascade do |t|
    t.bigint "follower_id", null: false
    t.bigint "user_to_be_followed_id", null: false
    t.boolean "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id", "approved"], name: "index_follow_requests_on_follower_id_and_approved"
    t.index ["follower_id", "user_to_be_followed_id"], name: "index_follow_requests_on_follower_id_and_user_to_be_followed_id", unique: true
    t.index ["follower_id"], name: "index_follow_requests_on_follower_id"
    t.index ["user_to_be_followed_id", "approved"], name: "index_follow_requests_on_user_to_be_followed_id_and_approved"
    t.index ["user_to_be_followed_id"], name: "index_follow_requests_on_user_to_be_followed_id"
  end

  create_table "likes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "users_id"
    t.bigint "posts_id"
    t.index ["posts_id", "users_id"], name: "index_likes_on_posts_id_and_users_id", unique: true
    t.index ["posts_id"], name: "index_likes_on_posts_id"
    t.index ["users_id"], name: "index_likes_on_users_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "poster_id", null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["poster_id"], name: "index_posts_on_poster_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "full_name", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["full_name"], name: "index_users_on_full_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "comments", "posts", column: "posts_id", on_delete: :cascade
  add_foreign_key "comments", "users", column: "users_id", on_delete: :cascade
  add_foreign_key "follow_requests", "users", column: "follower_id", on_delete: :cascade
  add_foreign_key "follow_requests", "users", column: "user_to_be_followed_id", on_delete: :cascade
  add_foreign_key "likes", "posts", column: "posts_id", on_delete: :cascade
  add_foreign_key "likes", "users", column: "users_id", on_delete: :cascade
end
