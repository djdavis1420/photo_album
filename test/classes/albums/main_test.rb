# frozen_string_literal: true

require 'test_helper'

class MainTest < ActiveSupport::TestCase
  test 'get_id prompts for id' do
    out, _ = capture_io { Albums::Main.get_id }
    assert_equal 'Please Enter an Album ID', out.chomp
  end

  test 'valid? returns true if provided string of positive whole number' do
    assert_equal true, Albums::Main.valid?('42')
  end

  test 'valid? returns true if provided string of negative whole number' do
    assert_equal false, Albums::Main.valid?('-42')
  end

  test 'valid? returns false if provided string including decimal' do
    assert_equal false, Albums::Main.valid?('42.42')
  end

  test 'valid? returns false if provided string including alpha characters' do
    assert_equal false, Albums::Main.valid?('foo')
  end

  test 'confirm_id prompts to confirms input' do
    out, _ = capture_io { Albums::Main.confirm('42') }
    assert_equal 'You entered 42. Continue? [Y/N]', out.chomp
  end

  test 'confirmed? returns true if provided Y' do
    assert_equal true, Albums::Main.confirmed?('Y')
  end

  test 'confirmed? return false if provided N' do
    assert_equal false, Albums::Main.confirmed?('N')
  end

  test 'get_photos outputs photos' do
    photo = { id: 42, title: 'foo' }.as_json

    Albums::Sync.stub(:call, [photo]) do
      out, _ = capture_io { Albums::Main.get_photos('42') }
      assert_match 'Photo ID: 42', out
      assert_match 'Title: foo', out
    end
  end

  test 'bail prints Goodbye! when provided declined' do
    out, _ = capture_io { Albums::Main.bail(:declined) }
    assert_equal 'Goodbye!', out.chomp
  end

  test 'bail prints Invalid Input when provided invalid' do
    out, _ = capture_io { Albums::Main.bail(:invalid) }
    assert_equal 'Invalid Input', out.chomp
  end
end
