/* eslint-disable prettier/prettier */
export default [{
        path: "*",
        meta: {
            public: true
        },
        redirect: {
            path: "/404"
        }
    },
    {
        path: "/404",
        meta: {
            public: true
        },
        name: "NotFound",
        component: () =>
            import (`@/views/NotFound.vue`)
    },
    {
        path: "/403",
        meta: {
            public: true
        },
        name: "AccessDenied",
        component: () =>
            import (`@/views/Deny.vue`)
    },
    {
        path: "/500",
        meta: {
            public: true
        },
        name: "ServerError",
        component: () =>
            import (`@/views/Error.vue`)
    },
    {
        path: "/login",
        meta: {
            public: true
        },
        name: "Login",
        component: () =>
            import (`@/views/Login.vue`)
    },
    {
        path: "/register",
        meta: {
            public: true
        },
        name: "Register",
        component: () =>
            import (`@/views/Register.vue`)
    },

    {
        path: "/",
        meta: {},
        name: "Root",
        redirect: {
            name: "Dashboard"
        }
    },
    {
        path: "/dashboard",
        meta: { breadcrumb: true },
        name: "Dashboard",
        component: () =>
            import (`@/views/Dashboard.vue`)
    },

    {
        path: "/media",
        meta: {},
        name: "Media",
        props: route => ({ type: route.query.type }),
        component: () =>
            import (`@/views/Media.vue`)
    },
    {
        path: "/chat",
        meta: {
            public: true
        },
        name: "Chat",
        component: () =>
            import (`@/components/chat/ChatLayout.vue`),
        redirect: {
            path: "/chat/messaging"
        },
        children: [{
                path: "/chat/messaging/:uuid?",
                meta: {
                    public: true
                },
                name: "ChatMessaging",
                props: true,
                components: {
                    default: () =>
                        import (`@/components/chat/ChatMessaging.vue`)
                }
            },
            {
                path: "/chat/contact/:uuid?",
                meta: {
                    public: true
                },
                name: "ChatContact",
                components: {
                    default: () =>
                        import (`@/components/chat/ChatContact.vue`)
                }
            }
        ]
    },
    {
        path: "/mail",
        meta: {
            public: true
        },
        name: "Mail",
        component: () =>
            import (`@/components/email/Layout.vue`),
        redirect: {
            path: "/mail/all"
        },
        children: [{
                path: "/mail/:mailType",
                meta: {
                    public: true
                },
                name: "MailIndex",
                component: () =>
                    import (`@/components/email/List.vue`)
            },
            {
                path: "/mail/0/:uuid",
                meta: {
                    public: true
                },
                name: "MailDetail",
                component: () =>
                    import (`@/components/email/Reply.vue`)
            }
        ]
    },
    {
        path: "/components/alert",
        meta: { breadcrumb: true },
        name: "components/alerts",
        component: () =>
            import (`@/views/ui/Alert.vue`)
    },
    {
        path: "/components/avatar",
        meta: { breadcrumb: true },
        name: "components/avatars",
        component: () =>
            import (`@/views/ui/Avatar.vue`)
    },
    {
        path: "/components/badge",
        meta: { breadcrumb: true },
        name: "components/badges",
        component: () =>
            import (`@/views/ui/Badge.vue`)
    },
    {
        path: "/components/button",
        meta: { breadcrumb: true },
        name: "components/buttons",
        component: () =>
            import (`@/views/ui/Button.vue`)
    },
    {
        path: "/components/parallax",
        meta: { breadcrumb: true },
        name: "components/parallax",
        component: () =>
            import (`@/views/ui/Parallax.vue`)
    },
    {
        path: "/components/snackbar",
        meta: { breadcrumb: true },
        name: "components/snackbar",
        component: () =>
            import (`@/views/ui/Snackbar.vue`)
    },
    {
        path: "/components/chip",
        meta: { breadcrumb: true },
        name: "components/chips",
        component: () =>
            import (`@/views/ui/Chip.vue`)
    },
    {
        path: "/components/card",
        meta: { breadcrumb: true },
        name: "components/cards",
        component: () =>
            import (`@/views/ui/Cards.vue`)
    },
    {
        path: "/components/table",
        meta: { breadcrumb: true },
        name: "components/tables",
        component: () =>
            import (`@/views/ui/Tables.vue`)
    },
    {
        path: "/components/carousel",
        meta: { breadcrumb: true },
        name: "components/carousels",
        component: () =>
            import (`@/views/ui/Carousels.vue`)
    },
    {
        path: "/components/dialog",
        meta: { breadcrumb: true },
        name: "components/dialogs",
        component: () =>
            import (`@/views/ui/Dialogs.vue`)
    },
    {
        path: "/components/icon",
        meta: { breadcrumb: true },
        name: "components/icons",
        component: () =>
            import (`@/views/ui/Icon.vue`)
    },
    {
        path: "/components/progress",
        meta: { breadcrumb: true },
        name: "components/progress",
        component: () =>
            import (`@/views/ui/Progress.vue`)
    },
    {
        path: "/components/slider",
        meta: { breadcrumb: true },
        name: "components/sliders",
        component: () =>
            import (`@/views/ui/Slider.vue`)
    },
    {
        path: "/components/tooltip",
        meta: { breadcrumb: true },
        name: "components/tooltips",
        component: () =>
            import (`@/views/ui/Tooltip.vue`)
    },
    {
        path: "/components/pagination",
        meta: { breadcrumb: true },
        name: "components/paginations",
        component: () =>
            import (`@/views/ui/Pagination.vue`)
    },
    {
        path: "/pickers/datepicker",
        meta: { breadcrumb: true },
        name: "pickers/datepicker",
        component: () =>
            import (`@/views/ui/Datepicker.vue`)
    },
    {
        path: "/components/typography",
        meta: { breadcrumb: true },
        name: "components/typography",
        component: () =>
            import (`@/views/ui/Typography.vue`)
    },
    {
        path: "/components/color",
        meta: { breadcrumb: true },
        name: "components/color",
        component: () =>
            import (`@/views/ui/Colors.vue`)
    },
    {
        path: "/pickers/timepicker",
        meta: { breadcrumb: true },
        name: "pickers/timepicker",
        component: () =>
            import (`@/views/ui/Timepicker.vue`)
    },
    {
        path: "/layout/bottomsheets",
        meta: { breadcrumb: true },
        name: "components/bottom-sheets",
        component: () =>
            import (`@/views/layout/BottomSheets.vue`)
    },
    {
        path: "/layout/expansion-panel",
        meta: { breadcrumb: true },
        name: "components/expansion-panels",
        component: () =>
            import (`@/views/layout/ExpansionPanels.vue`)
    },
    {
        path: "/layout/footer",
        meta: { breadcrumb: true },
        name: "components/footer",
        component: () =>
            import (`@/views/layout/Footers.vue`)
    },
    {
        path: "/layout/timeline",
        meta: { breadcrumb: true },
        name: "components/timeline",
        component: () =>
            import (`@/views/layout/Timeline.vue`)
    },
    {
        path: "/layout/list",
        meta: { breadcrumb: true },
        name: "components/lists",
        component: () =>
            import (`@/views/layout/Lists.vue`)
    },
    {
        path: "/layout/toolbar",
        meta: { breadcrumb: true },
        name: "components/toolbar",
        component: () =>
            import (`@/views/layout/Toolbar.vue`)
    },
    {
        path: "/layout/jumbotron",
        meta: { breadcrumb: true },
        name: "components/jumbotrons",
        component: () =>
            import (`@/views/layout/Jumbotrons.vue`)
    },
    {
        path: "/layout/menu",
        meta: { breadcrumb: true },
        name: "components/menus",
        component: () =>
            import (`@/views/layout/Menus.vue`)
    },
    {
        path: "/layout/navigation-drawer",
        meta: { breadcrumb: true },
        name: "components/navigation-drawers",
        component: () =>
            import (`@/views/layout/NavigationDrawers.vue`)
    },
    {
        path: "/layout/tabs",
        meta: { breadcrumb: true },
        name: "components/tabs",
        component: () =>
            import (`@/views/layout/Tabs.vue`)
    },
    {
        path: "/forms/basic",
        meta: { breadcrumb: true },
        name: "components/basic-forms",
        component: () =>
            import (`@/views/form/BasicForms.vue`)
    },
    {
        path: "/forms/selects",
        meta: { breadcrumb: true },
        name: "components/selects",
        component: () =>
            import (`@/views/form/Selects.vue`)
    },
    {
        path: "/forms/editor",
        meta: { breadcrumb: true },
        name: "components/editors",
        component: () =>
            import (`@/views/form/Editors.vue`)
    },

    {
        path: "/forms/selection-controls",
        meta: { breadcrumb: true },
        name: "components/selection-controls",
        component: () =>
            import (`@/views/form/SelectionControls.vue`)
    },
    {
        path: "/forms/text-fields",
        meta: { breadcrumb: true },
        name: "components/text-fields",
        component: () =>
            import (`@/views/form/TextFields.vue`)
    },
    {
        path: "/forms/steppers",
        meta: { breadcrumb: true },
        name: "components/steppers",
        component: () =>
            import (`@/views/form/Steppers.vue`)
    },
    {
        path: "/widgets/social",
        meta: { breadcrumb: true },
        name: "components/social",
        component: () =>
            import (`@/views/widgets/Social.vue`)
    },
    {
        path: "/widgets/post",
        meta: { breadcrumb: true },
        name: "components/widget-post",
        component: () =>
            import (`@/views/widgets/Post.vue`)
    },
    {
        path: "/widgets/statistic",
        meta: { breadcrumb: true },
        name: "components/statistic",
        component: () =>
            import (`@/views/widgets/Statistic.vue`)
    },
    {
        path: "/widgets/chart",
        meta: { breadcrumb: true },
        name: "components/chart",
        component: () =>
            import (`@/views/widgets/Chart.vue`)
    },
    {
        path: "/widgets/list",
        meta: { breadcrumb: true },
        name: "components/widget-list",
        component: () =>
            import (`@/views/widgets/List.vue`)
    },
    {
        path: "/pages/aboutus",
        meta: {
            breadcrumb: true,
            title: "About Us Index Page"
        },
        name: "pages/aboutus",
        components: {
            default: () =>
                import (`@/views/pages/AboutUs.vue`)
        }
    },
    {
        path: "/pages/history",
        meta: {
            breadcrumb: true,
            title: "History Page"
        },
        name: "pages/history",
        component: () =>
            import (`@/views/pages/History.vue`)
    },
    {
        path: "/pages/daterangepicker",
        meta: {
            breadcrumb: true,
            title: "History Page"
        },
        name: "pages/daterangepicker",
        component: () =>
            import (`@/views/pages/DateRangePicker.vue`)
    },
    {
        path: "/pages/tinymceeditor",
        meta: {
            breadcrumb: true,
            title: "TinyMce Editor"
        },
        name: "pages/tinymceeditor",
        component: () =>
            import (`@/views/pages/TinyMceEditors.vue`)
    },
    {
        path: "/pages/froalaeditor",
        meta: {
            breadcrumb: true,
            title: "Froala Editor"
        },
        name: "pages/froalaeditor",
        component: () =>
            import (`@/views/pages/FroalaEditors.vue`)
    }
];