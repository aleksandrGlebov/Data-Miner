class DataMinerClientStub:
    def get_data(self, query: str):

        return {
            "query": query,
            "result": f"Mocked result for query: {query}",
            "source": "Mock Data Miner",
            "timestamp": "2024-09-22T12:00:00Z"
        }

data_miner_client = DataMinerClientStub()