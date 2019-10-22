# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  seller_id   :integer          not null
#  description :text             not null
#  price       :float            not null
#  sold        :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
