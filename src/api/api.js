import { testData } from "./test_data"

export const fetchTasks = async (blockNumber, blockSize) => {
    const response = await fetch(apiURL)
    const fetchedData = await response.json()

    const begin = (blockNumber - 1) * blockSize
    const end = begin + blockSize

    JSON.parse(fetchedData).slice(begin, end)
}
