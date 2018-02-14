def get_article_list_by_tag(cursor,tag):
    sql="select title,title_en from article where type='%s'" % tag
    cursor.execute(sql)
    data = cursor.fetchall() 
    result=[]
    for i in data:
        result.append(i)
    return result

