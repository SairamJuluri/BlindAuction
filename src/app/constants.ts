export const AuctionContract = [
  {
    'constant': false,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_Amount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_durationMon',
        'type': 'uint256'
      }
    ],
    'name': 'addplan',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_subscriberId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_BidAmount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      }
    ],
    'name': 'Bid',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_subscriberId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      }
    ],
    'name': 'monthplay',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      }
    ],
    'name': 'reward',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      }
    ],
    'name': 'RewardAllSubscribers',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_Balance',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_subscriberId',
        'type': 'uint256'
      },
      {
        'internalType': 'string',
        'name': '_name',
        'type': 'string'
      }
    ],
    'name': 'SubscriberForChit',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      }
    ],
    'name': 'CheckWinnerRewardAmount',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'GetAllplan',
    'outputs': [
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'GetAllSubscrib',
    'outputs': [
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      }
    ],
    'name': 'GetAllSubscriberOfGroup',
    'outputs': [
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      }
    ],
    'name': 'GetPlainDetails',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_subscriberId',
        'type': 'uint256'
      }
    ],
    'name': 'GetSubscribDetails',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_groupId',
        'type': 'uint256'
      }
    ],
    'name': 'GetWinner',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }
];
