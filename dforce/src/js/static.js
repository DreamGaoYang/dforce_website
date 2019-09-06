var abiTicket = [{
    "constant": true,
    "inputs": [],
    "name": "topBidder",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "usdxAddr",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "balances",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "expireTime",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "wallet",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "deposit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "highestBid",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "closing",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "name": "_usdxAddr",
        "type": "address"
    }, {
        "name": "_expireTimeInMinutes",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}];
var abiUSDx = [{
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{
            "name": "",
            "type": "bytes32"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "stop",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "guy",
                "type": "address"
            },
            {
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "owner_",
            "type": "address"
        }],
        "name": "setOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "src",
                "type": "address"
            },
            {
                "name": "dst",
                "type": "address"
            },
            {
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "src",
            "type": "address"
        }],
        "name": "isOwner",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "guy",
                "type": "address"
            },
            {
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "name_",
            "type": "bytes32"
        }],
        "name": "setName",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "src",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "stopped",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "authority_",
            "type": "address"
        }],
        "name": "setAuthority",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "name": "",
            "type": "bytes32"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "guy",
                "type": "address"
            },
            {
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "guy",
            "type": "address"
        }],
        "name": "approvex",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "dst",
                "type": "address"
            },
            {
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "start",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "authority",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "src",
                "type": "address"
            },
            {
                "name": "guy",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "name": "symbol_",
            "type": "bytes32"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "guy",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "Mint",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "guy",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "name": "authority",
            "type": "address"
        }],
        "name": "LogSetAuthority",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "name": "owner",
            "type": "address"
        }],
        "name": "LogSetOwner",
        "type": "event"
    },
    {
        "anonymous": true,
        "inputs": [{
                "indexed": true,
                "name": "sig",
                "type": "bytes4"
            },
            {
                "indexed": true,
                "name": "guy",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "foo",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "bar",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "wad",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "fax",
                "type": "bytes"
            }
        ],
        "name": "LogNote",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "src",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "guy",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "src",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "dst",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];

// format number
function formatNumber(BNr) {
    var originStr = '0';
    if (BNr.toFixed() < (10 ** 15) && BNr.toFixed() > 0) {
        return '0.00';
    }
    originStr = BNr.div(10 ** 18).toString(10);
    if (originStr.indexOf('.') > 0) {
        originStr = originStr.substr(0, originStr.indexOf('.') + 3);
        if (originStr.length >= 12) {
            return originStr = originStr.substr(0, 11);
        } else {
            return originStr;
        }
    } else if (isNaN(originStr)) {
        return '0.00'
    } else {
        return originStr + '.00';
    }
}

var toTicket = 'http://192.168.200.109:9990/ticket.html';
var toHotel = 'http://192.168.200.109:9990/hotel.html';
var toHome = 'http://192.168.200.109:9990/devcon.html';

// R test net
var addressUSDx = '0x17996ea27d03d68ddc618f9b8f0faf43838acaf6';

var addressTicket = '0x75a4a3f23cbfe3cfd4163c50a03e40f4f0fb3045';

var addressHotel = '0x1bccaee199fadaf27aa8024811d29e97d173ac18';

