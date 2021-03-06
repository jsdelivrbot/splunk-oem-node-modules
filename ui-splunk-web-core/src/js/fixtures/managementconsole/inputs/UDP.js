define({
    "paging":{
        "total":3,
        "perPage":10,
        "offset":0
    },
    "entry":[
        {
            "links":{
                "list":"/services/dmc/config/inputs/_TheEvent/udp/3456",
                "edit":"/services/dmc/config/inputs/_TheEvent/udp/3456",
                "disable":"/services/dmc/config/inputs/_TheEvent/udp/3456/disable",
                "alternate":"/services/dmc/config/inputs/_TheEvent/udp/3456",
                "move":"/services/dmc/config/inputs/_TheEvent/udp/3456/move",
                "delete":"/services/dmc/config/inputs/_TheEvent/udp/3456"
            },
            "content":{
                "index":"indexx",
                "acceptFrom":"bluefile",
                "connection_host":"none",
                "disabled":"false",
                "sourcetype":"st",
                "host":"test",
                "source":"sourcetype"
            },
            "name":"3456",
            "@status":"pending",
            "acl":{
                "@bundleId":"TheEvent",
                "app":"_TheEvent",
                "@bundleType":"custom"
            }
        },
        {
            "links":{
                "list":"/services/dmc/config/inputs/__forwarders/udp/35452",
                "edit":"/services/dmc/config/inputs/__forwarders/udp/35452",
                "disable":"/services/dmc/config/inputs/__forwarders/udp/35452/disable",
                "alternate":"/services/dmc/config/inputs/__forwarders/udp/35452",
                "move":"/services/dmc/config/inputs/__forwarders/udp/35452/move",
                "delete":"/services/dmc/config/inputs/__forwarders/udp/35452"
            },
            "content":{
                "index":"index",
                "sourcetype":"st",
                "connection_host":"ip",
                "source":"host:9997"
            },
            "name":"35452",
            "@status":"pending",
            "acl":{
                "@bundleId":"forwarders",
                "app":"__forwarders",
                "@bundleType":"builtin"
            }
        },
        {
            "links":{
                "list":"/services/dmc/config/inputs/__forwarders/udp/39452",
                "edit":"/services/dmc/config/inputs/__forwarders/udp/39452",
                "disable":"/services/dmc/config/inputs/__forwarders/udp/39452/disable",
                "alternate":"/services/dmc/config/inputs/__forwarders/udp/39452",
                "move":"/services/dmc/config/inputs/__forwarders/udp/39452/move",
                "delete":"/services/dmc/config/inputs/__forwarders/udp/39452"
            },
            "content":{
                "sourcetype":"sourcetype",
                "index":"index",
                "acceptFrom":"anotherhost",
                "connection_host":"dns",
                "source":"host:port"
            },
            "name":"39452",
            "@status":"pending",
            "acl":{
                "@bundleId":"forwarders",
                "app":"__forwarders",
                "@bundleType":"builtin"
            }
        }
    ]
});
