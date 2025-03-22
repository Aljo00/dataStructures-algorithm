class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
    }

    node.isEnd = true;
  }

  findOne(prefix) {
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]) return null;

      node = node.children[char];
    }

    return node;
  }

  collectWords(node, prefix, result) {
    if (node.isEnd) result.push(prefix);

    for (let char in node.children) {
      this.collectWords(node.children[char], prefix + char, result);
    }
  }

  autoComplete(prefix) {
    let node = this.findOne(prefix);
    if (!node) return [];

    let result = [];
    this.collectWords(node, prefix, result);
    return result;
  }

  prefixSearch(prefix) {
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]){
        console.log("False");
        return;
      }

      node = node.children[char];
    }

    console.log("True");
    return;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("appy");
trie.insert("banana");

trie.prefixSearch("ap");
trie.prefixSearch("ba");
trie.prefixSearch("f")

console.log(trie.autoComplete("b"));
