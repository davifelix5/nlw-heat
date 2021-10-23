defmodule HeatTags.Tags.Count do
  alias HeatTags.Messages.Get

  def call do
    Get.today_messages()
    |> Task.async_stream(&count_words(&1.message))
    |> Enum.reduce(%{}, fn {:ok, frequencies}, acc -> sum_maps(acc, frequencies) end)
  end

  defp count_words(message) do
    String.split(message)
    |> Enum.frequencies()
  end

  defp sum_maps(map1, map2) do
    Map.merge(map1, map2, fn _key, val1, val2 -> val1 + val2 end)
  end
end
