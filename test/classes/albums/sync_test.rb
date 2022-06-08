# frozen_string_literal: true

require 'test_helper'

class SyncTest < ActiveSupport::TestCase
  test 'returns array of photos when called with valid album id' do
    assert_not_empty Albums::Sync.call(42)
  end

  test 'returns empty array when called with invalid album id' do
    assert_empty Albums::Sync.call(-42)
  end

  test 'raises argument error when input is not a number' do
    assert_raises(ArgumentError) { Albums::Sync.call('foo') }
  end
end
