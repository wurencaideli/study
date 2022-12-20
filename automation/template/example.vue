<template>
    <div>
        <%= data.test %>
        <div>
            <%_ [{name:"啊实打实的"}].forEach((item)=>{ -%>
            <%- item.name %>
            <%_ }); -%>
        </div>
    </div>
</template>