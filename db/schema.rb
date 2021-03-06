# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_03_125334) do

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

  create_table "clients", force: :cascade do |t|
    t.string "razao_social"
    t.string "cnpj"
    t.string "ie"
    t.string "email"
    t.string "phone"
    t.string "street"
    t.string "number"
    t.string "city"
    t.string "state"
    t.string "pais"
    t.string "neighborhood"
    t.string "cep"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "unity"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "addrees"
    t.string "phone"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "epi_orders", force: :cascade do |t|
    t.bigint "epi_id", null: false
    t.bigint "order_id", null: false
    t.integer "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["epi_id"], name: "index_epi_orders_on_epi_id"
    t.index ["order_id"], name: "index_epi_orders_on_order_id"
  end

  create_table "epis", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "machines", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "status", default: true
  end

  create_table "orders", force: :cascade do |t|
    t.text "description"
    t.boolean "status", default: false
    t.string "location"
    t.bigint "user_id", null: false
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "comments"
    t.bigint "contact_id", null: false
    t.boolean "field", default: false
    t.boolean "laboratory", default: false
    t.boolean "factory", default: false
    t.bigint "company_id", null: false
    t.integer "vegoor_order", default: 1
    t.integer "sf6_order", default: 1
    t.boolean "canceled", default: false
    t.index ["client_id"], name: "index_orders_on_client_id"
    t.index ["company_id"], name: "index_orders_on_company_id"
    t.index ["contact_id"], name: "index_orders_on_contact_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "orderservice_reports", force: :cascade do |t|
    t.string "parameter"
    t.string "unity"
    t.string "fase_a"
    t.string "fase_b"
    t.string "fase_c"
    t.string "reference"
    t.bigint "orderservice_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["orderservice_id"], name: "index_orderservice_reports_on_orderservice_id"
  end

  create_table "orderservices", force: :cascade do |t|
    t.bigint "service_id", null: false
    t.bigint "order_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "status", default: false
    t.bigint "machine_id", null: false
    t.string "machineserie"
    t.index ["machine_id"], name: "index_orderservices_on_machine_id"
    t.index ["order_id"], name: "index_orderservices_on_order_id"
    t.index ["service_id"], name: "index_orderservices_on_service_id"
  end

  create_table "orderutensils", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.bigint "utensil_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["order_id"], name: "index_orderutensils_on_order_id"
    t.index ["utensil_id"], name: "index_orderutensils_on_utensil_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.boolean "admin", default: false
    t.string "role"
    t.string "invitation_token"
    t.datetime "invitation_created_at"
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.bigint "invited_by_id"
    t.integer "invitations_count", default: 0
    t.bigint "client_id", null: false
    t.string "phone"
    t.string "registration", default: "000000"
    t.index ["client_id"], name: "index_users_on_client_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id"
    t.index ["invited_by_type", "invited_by_id"], name: "index_users_on_invited_by_type_and_invited_by_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "utensils", force: :cascade do |t|
    t.string "name"
    t.boolean "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vegoor_reports", force: :cascade do |t|
    t.text "goal"
    t.text "reception_test"
    t.boolean "warrant", default: false
    t.text "conclusion"
    t.text "observations"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "order_id", null: false
    t.boolean "status", default: false
    t.index ["order_id"], name: "index_vegoor_reports_on_order_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "epi_orders", "epis"
  add_foreign_key "epi_orders", "orders"
  add_foreign_key "orders", "clients"
  add_foreign_key "orders", "companies"
  add_foreign_key "orders", "users"
  add_foreign_key "orders", "users", column: "contact_id"
  add_foreign_key "orderservice_reports", "orderservices"
  add_foreign_key "orderservices", "machines"
  add_foreign_key "orderservices", "orders"
  add_foreign_key "orderservices", "services"
  add_foreign_key "orderutensils", "orders"
  add_foreign_key "orderutensils", "utensils"
  add_foreign_key "users", "clients"
  add_foreign_key "vegoor_reports", "orders"
end
