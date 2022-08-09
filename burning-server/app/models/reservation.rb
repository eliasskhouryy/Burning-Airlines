class Reservation < ApplicationRecord
    has_and_belongs_to_many :user, :optional => true
    has_and_belongs_to_many :flight, :optional => true
end
