class Flight < ApplicationRecord
    belongs_to :plane, optional => true
    has_and_belongs_to_many :reservations
end