# frozen_string_literal: true

require 'test_helper'

class SyncTest < ActiveSupport::TestCase
  test 'returns array of photos when input is existing album id' do
    assert_not_empty Albums::Sync.call(42)
  end

  test 'returns empty array when input is nonexisting album id' do
    assert_empty Albums::Sync.call(-42)
  end

  test 'raises argument error when input is not an integer' do
    assert_raises(ArgumentError) { Albums::Sync.call('foo') }
  end
end
