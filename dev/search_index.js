var documenterSearchIndex = {"docs":
[{"location":"#BenchmarkDataNLP.jl","page":"BenchmarkDataNLP.jl","title":"BenchmarkDataNLP.jl","text":"","category":"section"},{"location":"","page":"BenchmarkDataNLP.jl","title":"BenchmarkDataNLP.jl","text":"","category":"page"},{"location":"#Introduction","page":"BenchmarkDataNLP.jl","title":"Introduction","text":"","category":"section"},{"location":"","page":"BenchmarkDataNLP.jl","title":"BenchmarkDataNLP.jl","text":"BenchmarkDataNLP.jl is designed to assist users in generating text corpus datasets with parameterized complexity. By utilizing methods such as context-free grammars and Chomsky trees, this package enables the creation of datasets tailored for training natural language processing (NLP) models, including large language models (LLMs). The primary objective is to offer a controlled environment where the complexity of the datasets can be adjusted, facilitating efficient training and evaluation of NLP methods within manageable timeframes and computational resources.","category":"page"},{"location":"#Functions","page":"BenchmarkDataNLP.jl","title":"Functions","text":"","category":"section"},{"location":"","page":"BenchmarkDataNLP.jl","title":"BenchmarkDataNLP.jl","text":"Modules = [BenchmarkDataNLP]\nPrivate = false\nOrder = [:function]","category":"page"},{"location":"#BenchmarkDataNLP.add_random_suffix-Tuple{AbstractString}","page":"BenchmarkDataNLP.jl","title":"BenchmarkDataNLP.add_random_suffix","text":"add_random_suffix(input::AbstractString) -> String\n\nTakes a string and returns it with a random 5-character suffix added.\n\nReturns a string\n\nExamples\n\njulia> add_random_suffix(\"hello\")\n\"helloabc12\"\n\n\n\n\n\n","category":"method"},{"location":"#BenchmarkDataNLP.greet-Tuple{}","page":"BenchmarkDataNLP.jl","title":"BenchmarkDataNLP.greet","text":"greet()\n\nPrints a friendly greeting message to the console.\n\nReturns nothing\n\n\n\n\n\n","category":"method"},{"location":"#BenchmarkDataNLP.repeat_string-Tuple{AbstractString, Int64}","page":"BenchmarkDataNLP.jl","title":"BenchmarkDataNLP.repeat_string","text":"repeat_string(input::AbstractString, times::Int) -> String\n\nRepeats a string or character a specified number of times.\n\nReturns a string\n\nExamples\n\njulia> repeat_string(\"hi\", 3)\n\"hihihi\"\n\n\n\n\n\n","category":"method"}]
}
