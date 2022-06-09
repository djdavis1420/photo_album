# frozen_string_literal: true

require 'test_helper'

class SyncTest < ActiveSupport::TestCase
  test 'returns array of photos when input is existing album id' do
    assert_not_empty Albums::Sync.call(42)
  end

  test 'photos include appropriate keys' do
    keys = %w[albumId id title url thumbnailUrl]
    assert_equal keys.sort, Albums::Sync.call(42).first.keys.sort
  end

  test 'raises argument error when input is a negative whole number' do
    assert_raises(ArgumentError) { Albums::Sync.call('-42') }
  end

  test 'raises argument error when input includes decimal' do
    assert_raises(ArgumentError) { Albums::Sync.call('42.42') }
  end

  test 'raises argument error when input is not an integer' do
    assert_raises(ArgumentError) { Albums::Sync.call('foo') }
  end
end
